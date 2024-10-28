'use client';

import { Room } from "@/ts/interfaces/rooms-interface";


interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition transform hover:-translate-y-2 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{room.type}</h2>
      <p className="text-gray-500 mb-2">{room.description}</p>
      <p className="text-gray-500 mb-2">Taille : {room.size} m²</p>
      <p className="text-gray-500 mb-2">Prix : {room.price} €</p>
      <p className="text-gray-400 text-sm">Disponibilité : {room.is_available ? 'Disponible' : 'Indisponible'}</p>
    </div>
  );
}
