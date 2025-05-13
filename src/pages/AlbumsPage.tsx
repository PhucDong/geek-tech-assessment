import React, { useEffect, useMemo, useState } from "react";
import AlbumListTable from "../components/AlbumsPage/AlbumListTable";
import type { User } from "../types/Users";
import type { DefaultAlbum } from "../types/Albums";

function AlbumsPage(): React.ReactElement {
  const [albumsData, setAlbumsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 15;
  const [totalAlbums, setTotalAlbums] = useState(0);

  const getNewAlbumsData = useMemo(() => {
    if (albumsData.length > 0 || (usersData && usersData?.length > 0)) {
      return albumsData.map((album: DefaultAlbum) => {
        const user = usersData?.find((user: User) => user.id === album.userId);
        return {
          ...album,
          user: user ? user : null,
        };
      });
    }
  }, [albumsData, usersData]);

  // console.log("New Albums Data:", getNewAlbumsData);

  useEffect(() => {
    const fetchAlbumsData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=${limit}`
        );
        console.log("Response: ", response);
        const data = await response.json();

        // Get total number of albums
        const totalCount = response.headers.get("X-Total-Count");
        if (totalCount) setTotalAlbums(parseInt(totalCount, 10));

        setAlbumsData(data);
      } catch (error) {
        console.error("Error fetching albums data:", error);
      }
    };

    fetchAlbumsData();
  }, [page]);

  useEffect(() => {
      const fetchUsersData = async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
          );
          const data = await response.json();
  
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
      {getNewAlbumsData && getNewAlbumsData?.length > 0 && (
        <AlbumListTable
          data={getNewAlbumsData}
          totalAlbums={totalAlbums}
          limit={limit}
          page={page}
          onPage={setPage}
        />
      )}
    </div>
  );
}

export default AlbumsPage;
