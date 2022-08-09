import { css } from "@fuel-ui/css";
import { Heading, Stack, Card } from "@fuel-ui/react";
import { formatUnits } from "ethers/lib/utils";

import { useAssets } from "../hooks/useAssets";

export const ShowBalances = () => {
  const coins = useAssets();

  const formatValue = (amount: bigint | null | undefined, decimals: number) => {
    if (amount != null) {
      return formatUnits(amount, decimals);
    }
    return "";
  };

  return (
    <Card css={{ width: "250px", selfAlign: "flex-end", bg: "$gray7", marginTop: "10px", marginRight: "10px" }}>
      <Card.Header>
        <Heading>Balances</Heading>
      </Card.Header>
      <Card.Body>
        <Stack>
          {coins.map((coin) => (
            <div className={coinStyle()} key={coin.assetId}>
              {formatValue(coin.amount, coin.decimals!)} {coin.symbol}
            </div>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
};

const coinStyle = css({
  bg: "$accent9",
  color: "$gray1",
  textSize: "base",
  font: "$sans",
  display: "inline-flex",
  border: "1px solid transparent",
  borderRadius: "$lg",
});