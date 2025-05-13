import React, { useEffect, useState } from "react";
import type { User } from "../types/Users";
import UserListTable from "../components/UsersPage/UserListTable";

function UsersPage(): React.ReactElement {
  const [usersData, setUsersData] = useState([]);
  const limit = 10;
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
        );
        const data = await response.json();

        // Get total number of users
        const totalCount = response.headers.get("X-Total-Count");
        if (totalCount) setTotalUsers(parseInt(totalCount, 10));

        const newUsersData = data.map((user: User) => {
          return {
            ...user,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.name
            )}&rounded=true&background=random`,
          };
        });
        setUsersData(newUsersData);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchUsersData();
  }, [page]);

  return (
    <div className="desktop:p-6 h-full">
      {usersData && usersData?.length > 0 && (
        <UserListTable
          data={usersData}
          onPage={setPage}
          totalUsers={totalUsers}
          limit={limit}
          page={page}
        />
      )}
    </div>
  );
}

export default UsersPage;
