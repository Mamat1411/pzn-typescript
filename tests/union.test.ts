describe('Union Type', () => {
   it('should support union', () => {
        let sample: string | number | boolean = "Mamat";
        console.info(sample);

        sample = 20000000;
        console.info(sample);
        
        sample = true;
        console.info(sample);
   });

   it('should support typeof operator', function () {
        function process(value: string | number | boolean) {
            if (typeof value === "string") {
                value = value.toUpperCase();
            } else if (typeof value === "number") {
                value += 2;
            } else if (typeof value === "boolean") {
                value = !value;
            }

            return value;
        }

        expect(process("Mamat")).toBe("MAMAT");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
   })
});