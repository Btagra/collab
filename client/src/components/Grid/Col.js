import React from "react";

export const Col = ({ styling, size, children }) => (
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
        {children}
    </div>
);
