import MenuItem from "./MenuItem.js";

export default function Navigation() {
    return (
        <nav className="Navigation">
            <MenuItem item="Home" />
            <MenuItem item="Products" />
            <MenuItem item="Basket" />
            <MenuItem item="About" />
        </nav>
    );
}