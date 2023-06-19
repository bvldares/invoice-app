"use client"

import StatusFilter from "./filter/StatusFilter"

const MainHeader = () => {
    return (
        <section className="flex gap-32">
            {/*Title */}
            <div>
                <h2>Invoices</h2>
                <p>There are X total invoices</p>
            </div>

            <StatusFilter />

        </section>
    )
}

export default MainHeader