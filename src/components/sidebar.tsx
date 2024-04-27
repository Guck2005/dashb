import { Link, useLocation } from "react-router-dom";
import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { BiLogIn,BiCalendarEvent } from 'react-icons/bi';
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { MdMap ,MdPerson,MdTour,MdHotel, MdRestaurant} from 'react-icons/md';
const ExampleSidebar: FC = function () {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                as={Link}
                to="/"
                icon={HiChartPie}
                className={currentPage === "/" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/e-commerce/products"
                icon={HiShoppingBag}
                className={currentPage === "/e-commerce/products" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/users/list"
                icon={HiUsers}
                className={currentPage === "/users/list" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Users list
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/users/touriste"
                icon={MdTour}
                className={currentPage === "/users/touriste" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Guides
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/users/president"
                icon={MdPerson}
                className={currentPage === "/users/president" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Présidents
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/users/destination"
                icon={MdMap}
                className={currentPage === "/users/destination" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Destinations
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/evenement"
                icon={BiCalendarEvent}
                className={currentPage === "/evenement" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Evènements
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/restaurant"
                icon={MdRestaurant}
                className={currentPage === "/restaurant" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Restaurants
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/hebergement"
                icon={MdHotel}
                className={currentPage === "/hebergement" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Hebergements
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/expression_locale"
                icon={HiPencil}
                className={currentPage === "/users/expression_locale" ? "bg-gray-100 dark:bg-gray-700" : ""}
              >
                Expressions Locales
              </Sidebar.Item>
              <Sidebar.Collapse icon={BiLogIn} label="Authentification">
                <Sidebar.Item as={Link} to="/authentication/sign-in" icon={HiLogin}>
                  Connexion
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/authentication/sign-up" icon={HiPencil}>
                  Inscription
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/"
                icon={HiClipboard}
              >
                Docs
              </Sidebar.Item>
              <Sidebar.Item
                href="https://flowbite-react.com/"
                icon={HiCollection}
              >
                Components
              </Sidebar.Item>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/issues"
                icon={HiInformationCircle}
              >
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;
