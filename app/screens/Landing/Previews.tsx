import React from "react";
import {Stack, Text, Box} from "@chakra-ui/core";

import Preview from "./Preview";
import Content from "./Content";

const Previews = () => (
  <Box
    as="section"
    backgroundColor="teal.50"
    paddingBottom={{base: 12, sm: 24}}
    paddingTop={{base: 16, sm: 16}}
    textAlign={{base: "left", sm: "center"}}
  >
    <Content>
      <Stack spacing={12}>
        <Stack spacing={2} alignItems="center">
          <Text
            as="h3"
            color="gray.900"
            fontSize={{base: 24, sm: 36}}
            fontWeight={500}
            marginBottom={{base: 4, sm: 0}}
          >
            Versatil, para todo tipo de negocios
          </Text>
          <Text
            as="h4"
            fontSize={{base: 18, sm: 20}}
            color="gray.500"
            maxWidth={{base: "auto", sm: "3xl"}}
            textAlign={[ 'left', 'center' ]}
          >
            Independientemente del rubro, tu tienda Pency se ajusta a vos y tus productos, además de ofrecer una experiencia simple y agradable de compra a tus clientes.
          </Text>
        </Stack>
        <Stack
          isInline
          shouldWrapChildren
          alignItems="center"
          as="section"
          overflowX="auto"
          paddingY={4}
          spacing={6}
        >
          <Preview
            image="/assets/landing/store-0.jpg"
            store="tiendabastamaria"
            title="Basta María"
          />
          <Preview image="/assets/landing/store-1.jpg" store="faithdecoarg" title="Faith" />
          <Preview
            image="/assets/landing/store-2.jpg"
            store="fosforo.cocina"
            title="Fosforo Cocina"
          />
          <Preview image="/assets/landing/store-3.jpg" store="hardymarket" title="Hardy Market" />
        </Stack>
      </Stack>
    </Content>
  </Box>
);

export default Previews;
