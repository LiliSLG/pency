import React from "react";
import {Stack, Text, Box} from "@chakra-ui/core";

import CheckIcon from "~/ui/icons/Check";
import CircleIcon from "~/ui/icons/Circle";
import {useTranslation} from "~/i18n/hooks";
import {ClientTenant} from "~/tenant/types";
import {Product} from "~/product/types";

interface Props {
  tenant: ClientTenant;
  products: Product[];
}

const Challenges: React.FC<Props> = ({tenant, products}) => {
  const t = useTranslation();

  const hasBasicComplete = tenant.title && tenant.category && tenant.description && tenant.phone;
  const hasCustomizationComplete = tenant.logo && tenant.banner && tenant.color;
  const hasProducts = Boolean(products.length);

  return (
    <Box>
      <Stack backgroundColor="primary.50" padding={4} rounded="md" spacing={6}>
        <Text fontSize="lg" fontWeight="bold">
          {t("landing.home.startWithTheseChallenges")}
        </Text>
        <Stack spacing={6}>
          <Stack isInline opacity={hasBasicComplete ? 0.3 : 1}>
            {hasBasicComplete ? <CheckIcon /> : <CircleIcon />}
            <Stack spacing={0}>
              <Text>{t("landing.home.firstChallenge.title")}</Text>
              <Text color="gray.500" fontSize="sm">
                {t("landing.home.firstChallenge.description")}
              </Text>
            </Stack>
          </Stack>
          <Stack isInline opacity={hasCustomizationComplete ? 0.3 : 1}>
            {hasCustomizationComplete ? <CheckIcon /> : <CircleIcon />}
            <Stack spacing={0}>
              <Text>{t("landing.home.secondChallenge.title")}</Text>
              <Text color="gray.500" fontSize="sm">
                {t("landing.home.secondChallenge.description")}
              </Text>
            </Stack>
          </Stack>
          <Stack isInline opacity={hasProducts ? 0.3 : 1}>
            {hasProducts ? <CheckIcon /> : <CircleIcon />}
            <Stack spacing={0}>
              <Text>{t("landing.home.thirdChallenge.title")}</Text>
              <Text color="gray.500" fontSize="sm">
                {t("landing.home.thirdChallenge.description")}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Challenges;
