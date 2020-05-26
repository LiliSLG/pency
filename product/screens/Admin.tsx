import React from "react";
import {Stack, Box, Icon, Text, Flex} from "@chakra-ui/core";

import ProductDrawer from "../components/ProductDrawer";
import {useFilteredProducts, useProductActions} from "../hooks";
import {Product} from "../types";
import ProductsList from "../components/ProductsList";

import {groupBy} from "~/selectors/group";
import PlusIcon from "~/ui/icons/Plus";
import IconButton from "~/ui/controls/IconButton";
import Content from "~/ui/structure/Content";
import {useTranslation} from "~/hooks/translation";

const AdminScreen: React.FC = () => {
  const [selected, setSelected] = React.useState<Partial<Product> | undefined>(undefined);
  const {products, filters} = useFilteredProducts();
  const {update, remove, create} = useProductActions();
  const productsByCategory = groupBy(products, (product) => product.category);
  const t = useTranslation();

  async function handleSubmit(product: Product) {
    if (product.id) {
      await update(product);
    } else {
      await create(product);
    }

    closeDrawer();
  }

  function onCreate() {
    setSelected({
      available: true,
      image: "",
      options: [],
    });
  }

  function onEdit(product: Product) {
    setSelected(product);
  }

  function closeDrawer() {
    setSelected(undefined);
  }

  return (
    <>
      <Flex direction="column" height="100%" marginTop={4}>
        <Box flex={1}>
          <Flex alignItems="center" data-test-id="filters">
            <Content>
              <Flex alignItems="center" justifyContent="space-between" paddingX={4} width="100%">
                {filters}
                <IconButton
                  data-test-id="add-product"
                  leftIcon={PlusIcon}
                  marginLeft={4}
                  size="md"
                  variantColor="primary"
                  onClick={onCreate}
                >
                  {t("common.add")}
                </IconButton>
              </Flex>
            </Content>
          </Flex>
          <Content padding={4}>
            <Box width="100%">
              {products.length ? (
                <Stack spacing={6}>
                  {productsByCategory.map(([category, products]) => {
                    return (
                      <Box key={category} id={category}>
                        <Stack spacing={0}>
                          <Stack
                            isInline
                            alignItems="center"
                            borderBottomWidth={1}
                            fontSize="xl"
                            fontWeight={500}
                            paddingBottom={2}
                            spacing={2}
                          >
                            <Text>{category}</Text>
                            <Text color="gray.500">({products.length})</Text>
                          </Stack>
                          <ProductsList
                            products={products}
                            width="100%"
                            onEdit={onEdit}
                            onRemove={remove}
                          />
                        </Stack>
                      </Box>
                    );
                  })}
                </Stack>
              ) : (
                <Flex
                  alignItems="center"
                  direction="column"
                  flex={1}
                  justifyContent="center"
                  marginTop={{base: 12, sm: 24}}
                  paddingX={4}
                >
                  <Icon color="gray.200" mb={4} name="search" size="128px" />
                  <Text color="gray.500" fontSize="lg" textAlign="center">
                    No se encontraron productos
                  </Text>
                </Flex>
              )}
            </Box>
          </Content>
        </Box>
      </Flex>
      <ProductDrawer
        defaultValues={selected}
        isOpen={Boolean(selected)}
        onClose={closeDrawer}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AdminScreen;
