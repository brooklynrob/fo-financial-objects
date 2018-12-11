interface Irs {
	kind: "irs",
	description: "Interest Rate Swap"
}

interface Equity {
	kind: "equity",
	description: "Equity"
}

export interface FINOSTradedProductTypeDef {
	product: Irs | Equity
}
