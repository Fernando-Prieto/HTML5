describe("MathApi", function() {

	describe("Round", function() {
		it("Should round OK. (Radix > 0)", function() {

			var round = function () {
				MathAPI.round(6.6547,1);
			};

			expect(round).not.toThrow(new Error("radix <= 0"));

		});

		it("Should throw error. (Radix = 0)", function() {
			
			var round = function () {
				MathAPI.round(6.6547, 0);
			};

			expect(round).toThrow(new Error("radix <= 0"));
		});

		it("Should throw error. (Radix < 0)", function() {
			
			var round = function () {
				MathAPI.round(6.6547, -1);
			};

			expect(round).toThrow(new Error("radix <= 0"));
		});

		it("Should round OK. Checking result decimals", function() {
			
			var round = MathAPI.round(6.6547, 3);

			expect(round).toMatch(/\d{1,}[.]\d{3}/);
		});

		
	});

	describe("Ceil", function() {
		it("Should ceil OK. (step > 0)", function() {

			var ceil = function () {
				MathAPI.ceil(6.6547,1);
			};

			expect(ceil).not.toThrow(new Error("step <= 0"));

		});

		it("Should throw error. (step = 0)", function() {
			
			var ceil = function () {
				MathAPI.ceil(6.6547, 0);
			};

			expect(ceil).toThrow(new Error("step <= 0"));
		});

		it("Should throw error. (step < 0)", function() {
			
			var ceil = function () {
				MathAPI.ceil(6.6547, -1);
			};

			expect(ceil).toThrow(new Error("step <= 0"));
		});
	});

	describe("Clamp", function() {
		it("Should clamp OK.", function() {

			var clamp = function () {
				MathAPI.clamp(6, 4, 8);
			};

			expect(clamp).not.toThrow(new Error("min >= max"));

		});

		it("Should throw error. (min >= max)", function() {

			var clamp = function () {
				MathAPI.clamp(6, 5, 4);
			};

			expect(clamp).toThrow(new Error("min >= max"));
		});
	});
});