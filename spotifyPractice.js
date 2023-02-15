const clientId = "e3efbb2f3ec247f998414ae299ffe2ea";
const clientSecret = "d9579d764c0a478aabbf29979efc67e6";

// アクセストークンを取得する
async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
    },
    body: "grant_type=client_credentials",
  });
  const data = await res.json();
  return data.access_token;
}

// 検索結果を表示する
async function showResult(title) {
  // アクセストークンを取得
  const accessToken = await getAccessToken();

  // 曲を検索
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${title}&type=track&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await res.json();

  // 検索結果を表示
  const result = document.getElementById("result");
  if (data.tracks.items.title === 0) {
    result.innerText = "指定した長さの曲はありません";
  } else {
    let ans= data.tracks.items[0].name;
    ans+='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/'+data.tracks.items[0].id+'?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    result.innerHTML =ans;
  }
}

// フォームの送信時に検索結果を表示する
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
   event.preventDefault();
  const title = document.getElementById("title");
  showResult(title.value);
});