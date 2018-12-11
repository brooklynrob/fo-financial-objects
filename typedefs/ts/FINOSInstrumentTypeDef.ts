import {FINOSTradedProductTypeDef} from './FINOSTradedProductTypeDef';

export namespace FINOS {
	export interface FINOSInstrumentTypeDef {
		product: FINOSTradedProductTypeDef,
		name: string,
		id: {
				ticker?: string;
				ISIN?: string;
				CUSIP?: string;
				SEDOL?: string;
				RIC?: string;
				BBG?: string;
				PERMID?: string;
				FIGI?: string;
			}
	}
}
