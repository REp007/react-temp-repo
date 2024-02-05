import React, { useState } from "react";

interface Form {
    FirstName: string;
    LastName: string;
    Email: string;
}

const MyForm = () => {
    const [formData, setFormData] = useState<Form>({
        FirstName: "John",
        LastName: "Doe",
        Email: "JohnDoe@gmail.com",
    });

    const SubmitData = (e: React.FormEvent) => {
        e.preventDefault();

        const firstNameInput = (e.target as any).elements.firstName;
        const lastNameInput = (e.target as any).elements.lastName;
        const emailInput = (e.target as any).elements.email;

        const updatedFormData: Form = {
            FirstName: firstNameInput.value,
            LastName: lastNameInput.value,
            Email: emailInput.value,
        };

        setFormData(updatedFormData);
    };

    return (
        <>
            <form
                className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg"
                action=""
                method="post"
                onSubmit={SubmitData}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="firstName"
                    >
                        First Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="firstName"
                        placeholder={formData.FirstName}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="lastName"
                    >
                        Last Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="lastName"
                        placeholder={formData.LastName}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="email"
                        placeholder={formData.Email}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit Data
                    </button>
                </div>
            </form>

            <br />

            <p className="text-center">
                Hello: {formData.FirstName} {formData.LastName} | {formData.Email}
            </p>
        </>
    );
};

export default MyForm;
