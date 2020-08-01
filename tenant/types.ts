import {VariantColor} from "@chakra-ui/core";

import {Place} from "~/places/types";

interface Tenant {
  id: string;
  slug: string;
  tier: "free" | "preferential" | "commercial";
  tierUntil: number;
  category?: string;
  color: Extract<
    VariantColor,
    "yellow" | "blue" | "cyan" | "gray" | "orange" | "purple" | "red" | "pink" | "teal" | "green"
  >;
  phone: string;
  logo?: string;
  title: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  keywords?: string;
  banner?: string;
  description?: string;
  country?: string;
  location?: Place;
  highlight?: string;
  fields?: Field[];
  flags?: string[];
  hook?: string;
  pixel?: string;
  createdAt: number;
  layout?: "landscape" | "portrait";
  mercadopago?: {
    token: string;
    refresh: string;
    expiration: number;
  };
}

export interface ClientTenant extends Omit<Tenant, "mercadopago"> {
  mercadopago: boolean;
}

export type ServerTenant = Tenant;

export type Field = TextField | RadioField;

export interface TextField {
  id: string;
  title: string;
  type: "text";
  note: string;
  required: boolean;
  value?: string;
}

export interface RadioField {
  id: string;
  title: string;
  type: "radio";
  options: RadioFieldOption[];
  required: boolean;
  value?: string;
}

export interface RadioFieldOption {
  id: string;
  title: string;
  note: string;
}

export interface State {
  tenant: ClientTenant;
}

export interface Actions {
  update: (tenant: ClientTenant) => void;
}

export interface Context {
  state: State;
  actions: Actions;
}
