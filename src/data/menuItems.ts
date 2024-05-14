
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGear, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
    label: string,
    icon: IconDefinition,
    path: string
}
const menuItems: MenuItem[] = [
    { label: '', icon: faHouse, path: '/' },
    { label: '', icon: faUser, path: '/' },
    { label: '', icon: faGear, path: '/' }
];

export default menuItems;
