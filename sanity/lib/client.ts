import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skUmkWvhlwLrJ2Nn1VNERNui9ggb9PztNjSAdv7QkyMv6GFeKuoj96bWeAKaIyVdddcxIcH3izZUAZi4wb0TzcMLHI22T7JGBpdHwlkX5GPrBANIor9t3P6vn6LulGSFI4IUUJCJ21rlDNBanTvrAci0aNLMDXklYgdDu0PcnWpcMP57ifnO",
})
