import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const [userMetadata, setUserMetadata] = useState(null);
  const {
    loginWithRedirect,
    isAuthenticated,
    getAccessTokenSilently,
    logout,
    user,
  } = useAuth0();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  useEffect(() => {
    const getUserMetadata = async () => {
      // const domain = "YOUR_DOMAIN";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
    console.log("meta data", userMetadata);
  }, [getAccessTokenSilently, user?.sub]);

  console.log(user);

  return (
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content h-16">
      <div class="flex-1 px-2 mx-2">
        <Link to="/">
          <span class="text-lg font-bold">FURY 🎂</span>
        </Link>
      </div>
      {/* </Link> */}
      <div class="flex-none mr-5 mt-5">
        <div class="my-6 indicator">
          <div class="indicator-item badge badge-secondary">2</div>

          {isAuthenticated ? (
            <>
              <div class="avatar online mr-10 -mt-1">
                <div class="rounded-full w-10 h-10">
                  <img src={user.picture} alt="user-image" />
                </div>
              </div>

              <p className="pr-12 mt-1 cursor-default" onClick={() => logout()}>
                Sign Out
              </p>
            </>
          ) : (
            <p
              className="pr-12 mt-1 cursor-default"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Sign In
            </p>
          )}

          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
