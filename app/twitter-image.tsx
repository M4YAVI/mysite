import { ImageResponse } from 'next/og';
import { PROFILE } from '@/data/profile';

export const runtime = 'edge';

export const alt = PROFILE.name;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Fetch the image and convert to arrayBuffer
    const profileImage = await fetch(new URL('https://aryayama.netlify.app/me.jpeg')).then(
        (res) => res.arrayBuffer()
    );

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom right, #1a1a1a 0%, #000000 100%)',
                        zIndex: -1,
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: '#fff',
                            overflow: 'hidden',
                            marginBottom: '30px',
                            boxShadow: '0 0 40px rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            // @ts-ignore
                            src={profileImage}
                            alt={PROFILE.name}
                            width="150"
                            height="150"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1
                        style={{
                            fontSize: '100px',
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 0,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        {PROFILE.name}
                    </h1>
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#a3a3a3',
                            margin: 0,
                            maxWidth: '900px',
                            textAlign: 'center',
                        }}
                    >
                        Full Stack Developer & AI Engineer
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
