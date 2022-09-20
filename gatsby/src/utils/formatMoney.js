const formatter = Intl.NumberFormat('us-NY', {
  style: 'currency',
  currency: 'USD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
