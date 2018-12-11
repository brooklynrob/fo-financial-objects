// this would be available through a FINOS name namespace
// and maintained at github.com/finos/typedefs

export namespace FINOS {
	export interface FINOSContactTypeDef {
	  contact: {
	    //this is the common core FINOS definition
	    //this would exist in a common FINOS namespace
	      email: string;
	      twitter?: string;
	      phone?: string;
	      [x:string]: string;
	  }
	}
}
