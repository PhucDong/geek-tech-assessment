import React from "react";
import type { NewAlbum } from "../../types/Albums";
import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";
import ShowButton from "../common/ShowButton";

interface AlbumListTableProps {
  data: NewAlbum[];
  totalAlbums: number;
  limit: number;
  page: number;
  onPage: (page: number) => void;
}

function AlbumListTable(props: AlbumListTableProps): React.ReactElement {
  const { data, totalAlbums, limit, page, onPage } = props;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                ID
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Title
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                User
              </th>
              <th className="px-5 py-3 border-b desktop:text-sm laptopl:text-base font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b h-[64px]">
                <td className="px-5 py-4 desktop:text-sm laptopl:text-base">
                  {item.id}
                </td>
                <td className="px-6 py-4 desktop:text-sm laptopl:text-base">
                  {item.title}
                </td>
                <td className="px-6 py-4 h-[64px]">
                  <Link
                    to={`/users/${item.userId}`}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={item.user?.avatar}
                      alt={item.user?.name}
                      className="desktop:w-[32px] desktop:h-[32px] laptopl:w-[34px] laptopl:h-[34px]"
                    />
                    <p className="desktop:text-sm laptopl:text-base">
                      {item.user?.name}
                    </p>
                  </Link>
                </td>
                <td className="px-5 py-4 space-x-2">
                  <ShowButton navigatePath={`/albums/${item.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center mt-6">
        <div className="flex items-center gap-2">
          {totalAlbums > limit &&
            Array.from({ length: Math.round(totalAlbums / limit) }, (_, i) => (
              <Pagination
                key={i}
                label={i + 1}
                isSelected={page === i + 1}
                onPage={onPage}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumListTable;
