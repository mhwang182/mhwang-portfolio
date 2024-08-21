const SendEmail = async (data: any, handleSuccess: (success: boolean) => void) => {

    data["access_key"] = process.env.EMAIL_ACCESS_KEY;

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
        handleSuccess(responseData.success)

    } catch (error) {
        handleSuccess(false)
    }

}

export { SendEmail }