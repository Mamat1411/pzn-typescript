describe('any', () => { 
    it('should support any', () => {
        const person: any = {
            id: 1,
            name: "Muhammad Mujahid",
            age: 27
        }

        person.name = "Mamat";
        person.address = "Bintaro";

        console.info(person);
    })
})