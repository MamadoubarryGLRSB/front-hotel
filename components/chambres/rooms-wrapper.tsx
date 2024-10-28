'use client';

import { Room } from '@/ts/interfaces/rooms-interface';
import { Fragment } from 'react';
import RoomCard from './room-card';

interface RoomsWrapperProps {
  roomsResponse: Room[];
}

export default function RoomsWrapper({ roomsResponse }: RoomsWrapperProps) {
  if (!Array.isArray(roomsResponse)) {
    return <p className="text-center text-red-500">Erreur : Les données de chambres ne sont pas disponibles.</p>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-center font-bold text-3xl text-blue-800 underline underline-offset-8 mb-6">
        Liste des chambres
      </h1>

      <p className="text-2xl text-center mb-8">{roomsResponse.length} chambres disponibles</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {roomsResponse.map((room: Room) => (
          <Fragment key={`${room.chambre_id}-${room.photo_id || room.num}`}>
            <RoomCard room={room} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
