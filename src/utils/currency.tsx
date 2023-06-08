import { FormattedNumber } from "react-intl"

export const FormatMoney = ({ price }: { price: number }) => {
  return (
    <>
      <FormattedNumber value={price} style="currency" currency="IDR" maximumSignificantDigits={1}></FormattedNumber>
    </>
  )
}