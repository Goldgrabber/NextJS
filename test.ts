const a: number = 5;

let b: string = 'text';

let c = true;

const d: string[] = ['werw', 'ewrq', 'dsf'];

let e: any = 5;
e = 'dsf';

function test(a: string): number | string {
	return '';
}

const test2 = (a: number): number => { return a * 2; }

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number, long?: number }) {

}
function printIt(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === 'string') {
		id.toUpperCase()
	}
}

const x: undefined = undefined;
const z: null = null;