const axios = require("axios");

const DAILY_API_KEY = "84eff6e2bb6c557b2966cd1e6dacdcee3a09804c45df2f281c584e5d7f4ca3c3"; 
const DAILY_API_URL = "https://api.daily.co/v1/rooms";

const createVideoRoom = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ error: "Missing bookingId" });
    }
    const roomName = `session-${id}-${Date.now()}`;
    const response = await axios.post(
      DAILY_API_URL,
      {
        name: roomName,
        properties: {
          exp: Math.floor(Date.now() / 1000) + 60 * 60, 
          enable_chat: true,
          start_video_off: false,
          start_audio_off: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${DAILY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const roomData = response.data;
    res.status(201).json({ roomUrl: roomData.url });
  } catch (error) {
    res.status(500).json({ error: "Failed to create video room" });
  }
};

module.exports = {
  createVideoRoom,
};
