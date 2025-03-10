const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const commandStatsSchema = new mongoose.Schema({
  username: { type: String, required: true }, 
  userId: { type: String, required: true },
  serverId: { type: String, required: true },
  stars: { type: Number, default: 0 },
  totalMuteCount: { type: Number, default: 0 },
  roleAcquisitionDates: { type: Map, of: Date, default: {} },
  muteCount: { type: Number, default: 0 },
  unmuteCount: { type: Number, default: 0 },
  kickCount: { type: Number, default: 0 },
  banCount: { type: Number, default: 0 },
  unbanCount: { type: Number, default: 0 },
  totalMessages: { type: Number, default: 0 },
  MessageCount: { type: Number, default: 0 },
  messagesToday: { type: Number, default: 0 }, 
  messagesLast7Days: { type: Number, default: 0 },
  messagesLast30Days: { type: Number, default: 0 },
  muteCountToday: { type: Number, default: 0 },
  unmuteCountToday: { type: Number, default: 0 },
  muteCountLast7Days: { type: Number, default: 0 },
  unmuteCountLast7Days: { type: Number, default: 0 },
  kickCountLast7Days: { type: Number, default: 0 },
  banCountLast7Days: { type: Number, default: 0 },
  unbanCountLast7Days: { type: Number, default: 0 },
  muteCountLast30Days: { type: Number, default: 0 },
  unmuteCountLast30Days: { type: Number, default: 0 },
  kickCountLast30Days: { type: Number, default: 0 },
  banCountLast30Days: { type: Number, default: 0 },
  unbanCountLast30Days: { type: Number, default: 0 },
  messagesByDate: { type: Map, of: Number, default: {} },
lastMessageDate: { type: Date, default: new Date(0) },
  nominationCount: { type: Number, default: 0 },
  nominationCountTodayByMessages: { type: Number, default: 0 },
  nominationCountWeekByMessages: { type: Number, default: 0 },
  nominationCountMonthByMessages: { type: Number, default: 0 },
  nominationCountTodayByMutes: { type: Number, default: 0 },
  nominationCountWeekByMutes: { type: Number, default: 0 },
  nominationCountMonthByMutes: { type: Number, default: 0 },
  activeStarBoost: {
    percentage: Number,   
    expiresAt: Date 
},
voiceTime: { type: Number, default: 0 },
voiceTimeToday: { type: Number, default: 0 },
voiceLast7Days: { type: Number, default: 0 },
voiceLast30Days: { type: Number, default: 0 },
achievements: { type: Array, default: [] },
regularLootboxCount: { type: Number, default: 0 },  
totalLootboxCount: { type: Number, default: 0 }, 
epicLootboxCount: { type: Number, default: 0 },     
legendaryLootboxCount: { type: Number, default: 0 },
boughtEPCGenerators: { type: String, default: null },
 userAvatar: { type: String, default: null },
 uuid: {
  type: String,
  default: uuidv4, 
  unique: true,
},
});

module.exports = mongoose.model('CommandStats', commandStatsSchema);
