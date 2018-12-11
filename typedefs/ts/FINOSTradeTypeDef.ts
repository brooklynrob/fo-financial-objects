import {FINOSTradedInstrumentTypeDef} from './FINOSTradedInstrumentTypeDef';

export namespace FINOS {
	export interface FINOSTradeTypeDef {
		trade: {
			instrument: FINOSInstrumentTypeDef
		}
	}
}
