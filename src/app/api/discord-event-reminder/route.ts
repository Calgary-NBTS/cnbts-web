export const dynamic = 'force-dynamic'; // defaults to auto
import getTodaysEvents from '@/sanity/queries/getTodaysEvents';
// import {toMarkdown} from '@sanity/block-content-to-markdown'
import { portableTextToMarkdown } from '@/util/utils';

interface Field {
  name: string;
  value: string;
  inline?: boolean;
}

interface Embed {
  title?: string;
  description?: string;
  url?: string;
  color?: number;
  image?: {
    url?: string;
  };
  fields?: Field[];
}

interface DiscordPostType {
  content?: string;
  embeds?: Embed[];
  username?: string;
}

export async function GET(request: Request) {
  const now = new Date();
  const todaysEvents = await getTodaysEvents({
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
  });

  if (todaysEvents.length === 0) {
    const nothingPost = {
      content: 'No events today',
      username: 'Event Reminder',
    };

    const discordCall = await fetch(process.env.DISCORD_EVENT_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nothingPost),
    });

    return new Response(null, {
      status: 204,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const embeds: Embed[] = todaysEvents.map((event) => {
    return {
      title: event.title || 'Untitled Event',
      description: portableTextToMarkdown(event.content),
      url: 'https://www.calgarynbts.ca',
      color: 10685835,
      fields: [
        {
          name: 'Starts at',
          value: new Date(event.time||null).toLocaleTimeString('en-CA', {timeStyle: 'short'}),
          inline: true,
        },
        {
          name: 'Ends at',
          value: new Date(event.timeend||undefined).toLocaleTimeString('en-CA', {timeStyle: 'short'}),
          inline: true,
        },
        {
          name: 'Location',
          value: event.locationname || 'Unknown Location',
        },
        {
          name: 'Address',
          value: event.location || 'Unknown Address',
        },
      ],
      image: {
        url: event.posterImage || 'https://www.calgarynbts.ca/android-chrome-512x512.png',
      },
    };
  }) as Embed[];

  const discordPost: DiscordPostType = {
    content: "Today's <@&1202450153986850816>",
    embeds,
    username: 'Event Reminder',
  };

  const discordCall = await fetch(process.env.DISCORD_EVENT_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(discordPost),
  });

  // we will post a reminder at 6:00am

  // JSON.stringify(discordPost)
  return new Response(null, {
    status: 204,
    headers: { 'Content-Type': 'application/json' },
  });
}

/*
{
  "content": "<@&1202450153986850816>",
  "embeds": [
    {
      "description": "Starts tonight at 7:30",
      "color": 5814783,
      "image": {
        "url": "https://www.calgarynbts.ca/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9108qgzh%2Fproduction%2F6b6805217ed5d6321248480727e19b644038d74c-2048x2048.png&w=828&q=75"
      }
    }
  ],
  "username": "Event Reminder",
  "attachments": []
}
*/
