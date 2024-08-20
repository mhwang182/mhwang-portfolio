const SendEmail = async (data: any, handleSuccess: (success: boolean) => void) => {


    console.log(process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY);

    data["access_key"] = process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data, null, 2)
        })

        const responseData = await response.json();
        console.log(responseData);
        handleSuccess(responseData.success)

    } catch (error) {
        console.log(error)
        handleSuccess(false)
    }

}

export { SendEmail }