declare namespace PetResponses {
  interface pet {
    id: number;
    category: {
      id: number;
      name: string;
    };
    name: string;
    photoUrls: string[];
    tags: tag[];
    status: string;
  }

  interface tag {
    id: number;
    name: string;
  }
}
