
export const condCheck = (count, count2) => {
    if (count > count2) {
        return (<> <h1>Count one is Higher</h1></>
        )
    } else if (count < count2) {
        return (<><h1>Count Two is Higher </h1></>
        )
    } else {
        return (
            <>
                <h1>Both the Counts Are Equal</h1>
            </>
        )
    }
}