import { transform } from 'buble';
import { createFilter } from 'rollup-pluginutils';

export default function buble ( options ) {
	if ( !options ) options = {};
	var filter = createFilter( options.include, options.exclude );

	if ( !options.transforms ) options.transforms = {};
	options.transforms.modules = false;

	return {
		name: 'buble',

		transform: function ( code, id ) {
			if ( !filter( id ) ) return null;

			try {
				return transform( code, options );
			} catch (e) {
				e.plugin = 'buble';
				e.loc = { file: id, line: e.loc.line, column: e.loc.column };
				e.frame = e.snippet;
				throw e;
			}
		}
	};
}
