import React from "react";
import {PseudoBox, Input, Flex, Spinner, Text, Box, Stack} from "@chakra-ui/core";

import TrashIcon from "../icons/Trash";
import PlusIcon from "../icons/Plus";

import storage from "~/storage/api";
import {Quality} from "~/storage/types";
import {useToast} from "~/hooks/toast";
import {useTenant} from "~/tenant/hooks";

interface Props {
  value?: string;
  quality?: Quality;
  onChange: (value: string) => void;
}

const ImageInput: React.FC<Props> = ({value, onChange, quality = "low"}) => {
  const [isLoading, setLoading] = React.useState(false);
  const toast = useToast();
  const {slug: tenant} = useTenant();

  async function upload(file?: File) {
    if (!file) return;

    try {
      setLoading(true);

      const url = await storage.upload(file, quality, tenant);

      onChange(url);
      setLoading(false);
    } catch (e) {
      toast({
        title: "Error",
        description: "Hubo un error subiendo la imágen, intentá de nuevo mas tarde",
        status: "error",
      });
    }
  }

  return (
    <Box height={16} position="relative" width={16}>
      {isLoading && (
        <Flex
          alignItems="center"
          background="rgba(0,0,0,0.2)"
          height="100%"
          justifyContent="center"
          left={0}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
        >
          <Spinner color="primary.500" zIndex={3} />
        </Flex>
      )}
      {value ? (
        <Box height="100%" width="100%">
          <PseudoBox
            _hover={{
              opacity: 1,
            }}
            alignItems="center"
            background="rgba(0,0,0,0.2)"
            color="white"
            cursor="pointer"
            display="flex"
            height="100%"
            justifyContent="center"
            left={0}
            opacity={0}
            position="absolute"
            rounded="lg"
            top={0}
            transition="opacity 0.25s"
            width="100%"
            zIndex={1}
            onClick={() => onChange(undefined)}
          >
            <TrashIcon />
          </PseudoBox>
          <Box
            backgroundColor="gray.100"
            backgroundImage={`url(${value})`}
            backgroundPosition="center"
            backgroundSize="cover"
            boxShadow="inset 0 0 1px rgba(0,0,0,0.3)"
            height="100%"
            rounded="lg"
            width="100%"
          />
        </Box>
      ) : (
        <Box
          alignItems="center"
          backgroundColor="gray.100"
          color="gray.400"
          display="flex"
          height={16}
          justifyContent="center"
          position="relative"
          rounded="lg"
          width={16}
        >
          <Input
            accept="image/*"
            cursor="pointer"
            height="100%"
            left={0}
            name="image"
            opacity={0}
            placeholder="Imágen"
            position="absolute"
            title="Cargar imágen"
            top={0}
            type="file"
            width="100%"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              upload(event.target.files?.[0])
            }
          />
          <Stack alignItems="center" justifyContent="center" spacing={0}>
            <PlusIcon />
            <Text fontSize="xs">Imágen</Text>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ImageInput;
