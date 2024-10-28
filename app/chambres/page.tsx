import RoomsWrapper from "@/components/chambres/rooms-wrapper";

export async function getRooms() {
    try {
      const res = await fetch(`${process.env.REACT_BASE_API_URL_PRISMA}/chambre`, { next: { tags: ['chambres'] } });
  
      console.log('Response:', res); 
    
      const rooms = await res.json();
  
      console.log('Rooms:', rooms); 
  
      return rooms;
  
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
  

export default  async function ChambresPage(){
    const roomsResponse = await getRooms();
    console.log(roomsResponse);
    return  <RoomsWrapper roomsResponse={roomsResponse}/>;
}