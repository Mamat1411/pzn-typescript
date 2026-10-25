describe('Array', () => {
    it('should support array', () => {
        const names: string[] = ["Mamat", "Sari"];
        const values: number[] = [20000000, 15000000];
        
        console.info(names);
        console.info(values);
        
    });
    
    it('should support read-only array', function () {
        const hobbies: ReadonlyArray<string> = ["Gaming", "Cooking"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    })

    it('should support a tuple', function () {
        const person: readonly [string, number, string, number] = ["Mamat", 20000000, "Sari", 15000000];

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        console.info(person[3]);
    })
})