function apitest () {
    console.log("Hello Api on");
    fetch("/api/data", {
        headers: {
            "Content-Type": "application/json",

            /* use JWT token generate here */
        },
        method : "post"
    });

    return (
        <div className="data">
            <h1>Testing</h1>
        </div>
    );
}

export default apitest;