describe("MathApi", function() {

	var val;

	beforeEach(function() {
          val = 6.6547;        
  	});        


	describe("Round", function() {
		it("Should round OK. (Radix > 0)", function() {

			var round = function () {
				MathAPI.round(val,1);
			};

			expect(round).not.toThrow(new Error("radix <= 0"));

		});

		it("Should throw error. (Radix = 0)", function() {
			
			var round = function () {
				MathAPI.round(val, 0);
			};

			expect(round).toThrow(new Error("radix <= 0"));
		});

		it("Should throw error. (Radix < 0)", function() {
			
			var round = function () {
				MathAPI.round(val, -1);
			};

			expect(round).toThrow(new Error("radix <= 0"));
		});

		it("Should round OK. Checking result decimals", function() {
			
			expect(MathAPI.round(val, 3)).toMatch(/\d{1,}[.]\d{3}/);
		});

		
	});

	describe("Ceil", function() {
		it("Should ceil OK. (step > 0)", function() {
			
			var ceil = function () {
				MathAPI.ceil(val, 1);
			};

			expect(ceil).not.toThrow(new Error("step <= 0"));

			expect(MathAPI.ceil(val,1)).toEqual(7);

		});

		it("Should throw error. (step = 0)", function() {
			
			var ceil = function () {
				MathAPI.ceil(val, 0);
			};

			expect(ceil).toThrow(new Error("step <= 0"));
		});

		it("Should throw error. (step < 0)", function() {
			
			var ceil = function () {
				MathAPI.ceil(val, -1);
			};

			expect(ceil).toThrow(new Error("step <= 0"));
		});
	});

	describe("Clamp", function() {

		it("Should clamp OK. Return MIN (val < min)", function() {

			expect(MathAPI.clamp(val, 7, 8)).toEqual(7);

		});

		it("Should clamp OK. Return VAL (val > min && val < max)", function() {

			expect(MathAPI.clamp(val, 4, 8)).toEqual(6.6547);

		});

		it("Should clamp OK. Return MAX (val > max)", function() {

			expect(MathAPI.clamp(val, 4, 5)).toEqual(5);

		});
	});

	describe("countSteps", function() {

		it("Should throw error. (step = 0)", function() {
			
			var countSteps = function () {
				MathAPI.countSteps(val, 0, 1);
			};

			expect(countSteps).toThrow(new Error("step <= 0"));
		});

		it("Should throw error. (step < 0)", function() {
			
			var countSteps = function () {
				MathAPI.countSteps(val, -1, 0);
			};

			expect(countSteps).toThrow(new Error("step <= 0"));
		});

		it("Should countSteps OK.", function() {

			expect(MathAPI.countSteps(val, 1, 5)).toEqual(1);
		});

		it("Should countSteps OK. offset = 0", function() {

			expect(MathAPI.countSteps(val, 3.32735, 0)).toEqual(2);
		});
	});

	describe("Floor", function() {
		it("Should floor OK. (step > 0)", function() {
			
			var floor = function () {
				MathAPI.floor(val, 1);
			};

			expect(floor).not.toThrow(new Error("step <= 0"));

			expect(MathAPI.floor(val,1)).toEqual(6);

		});

		it("Should throw error. (step = 0)", function() {
			
			var floor = function () {
				MathAPI.floor(val, 0);
			};

			expect(floor).toThrow(new Error("step <= 0"));
		});

		it("Should throw error. (step < 0)", function() {
			
			var floor = function () {
				MathAPI.floor(val, -1);
			};

			expect(floor).toThrow(new Error("step <= 0"));
		});
	});

	describe("In Range", function() {
		it("Should be in range", function() {
			
			expect(MathAPI.inRange(val, 5, 6, 0.6547)).toBe(true);

		});

		it("Should not be in range", function() {
			
			expect(MathAPI.inRange(val, 5, 6, 0.3)).toBe(false);

		});
	});

	describe("Lerp", function() {
		it("Should lerp ok", function() {
			
			expect(MathAPI.lerp(4, 2, 5)).toEqual(14);

		});

		it("Should return 0", function() {
			
			expect(MathAPI.lerp(0, 0, 5)).toEqual(0);

		});
	});

	describe("Loop", function() {

		it("Should loop OK. Return MAX (val < min)", function() {

			expect(MathAPI.loop(val, 7, 8)).toEqual(8);

		});

		it("Should loop OK. Return VAL (val <= min && val => max)", function() {

			expect(MathAPI.loop(val, 4, 8)).toEqual(6.6547);

		});

		it("Should loop OK. Return MIN (val > max)", function() {

			expect(MathAPI.loop(val, 4, 5)).toEqual(4);

		});
	});

	describe("Normalize", function() {
		it("Should normalize ok OK. (min != max)", function() {
			
			var norm = function () {
				MathAPI.norm(val, 3, 4);
			};

			expect(norm).not.toThrow(new Error("min == max"));

			expect(MathAPI.norm(val, 5, 7)).toEqual(0.82735);

		});

		it("Should throw error. (step < 0)", function() {
			
			var norm = function () {
				MathAPI.norm(val, 4, 4);
			};

			expect(norm).toThrow(new Error("min == max"));
		});
	});
});