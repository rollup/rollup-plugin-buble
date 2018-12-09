const assert = require( 'assert' );
const rollup = require( 'rollup' );
const buble = require( '..' );

process.chdir( __dirname );

const getChunksFromGenerated = generated => {
	if (generated.output) {
		return generated.output.length ? generated.output : Object.keys(generated.output)
			.map(chunkName => generated.output[chunkName]);
	} else {
		return [generated];
	}
};

function getChunksFromBundle ( bundle ) {
	return bundle.generate({
		format: 'esm'
	}).then( getChunksFromGenerated);
}

describe( 'rollup-plugin-buble', function () {
	it('transforms files', function () {
		return rollup.rollup({
			input: 'samples/basic/main.js',
			plugins: [buble()]
		}).then(getChunksFromBundle)
			.then(generated => {
				assert.equal(generated.length, 1);
				assert.equal(generated[0].code, 'function main () { return 42; }\n\nexport default main;\n');
			});
	});
});
