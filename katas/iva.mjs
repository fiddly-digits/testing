export default function iva(quantity) {
  if (isNaN(parseInt(quantity)) || Array.isArray(quantity))
    throw new Error('invalid value');
  return quantity * 0.16;
}
