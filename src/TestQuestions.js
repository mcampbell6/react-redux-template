export default {
    getQuestions() {
        return ({
            1: {
                type: "radio",
                text: "Do you understand how this works",
                name: "understanding",
                required: true,
                options: [
                    {value: "M", display: "Certainly!", checked: true},
                    {value: "F", display: "No not at all."}
                ]
            },
            firstNameId: {
                type: "text",
                text: "What is your first name?",
                name: "firstName",
                required: true
            }
        })
    }
}
