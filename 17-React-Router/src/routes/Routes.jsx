import UserRoot from "../pages/User/UserRoot.jsx"
import AdminRoot from "../pages/Admin/AdminRoot.jsx"
import Basket from "../pages/User/Basket/Basket.jsx"
import BookDetail from "../pages/User/BookDetail/BookDetail.jsx"
import Books from "../pages/User/Books/Books.jsx"
import Favorites from "../pages/User/Favorites/Favorites.jsx"
import DashBoard from "../pages/Admin/DashBoard/DashBoard.jsx"
import Home from "../pages/User/Home/Home.jsx"
import EditBook from "../pages/Admin/EditBook/EditBook.jsx"
import AddBook from "../pages/Admin/AddBook/AddBook.jsx"
import AdminBooks from "../pages/Admin/AdminBooks/AdminBooks.jsx"


const ROUTES = [

    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/books",
                element: <Books />,
            },
            {
                path: "/books/:id",
                element: <BookDetail />,
            },

            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <DashBoard />
            },
            {
                path: "books",
                element: <AdminBooks />
            },
            {
                path: "addbook",
                element: <AddBook />
            },
            {
                path: "editbook",
                element: <EditBook />
            }
        ]
    }
]


export default ROUTES