import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyProfile.module.css";

const MyProfile = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuButtonItemIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconsMessengerClick = useCallback(() => {
    navigate("/messenger");
  }, [navigate]);

  const onMenuButtonItemIcon2Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  return (
    <div className={styles.myProfile}>
      <div className={styles.profilebody}>
        <div className={styles.header}>
          <div className={styles.profilePic}>
            <img
              className={styles.profilePicIcon}
              alt=""
              src="/profilepics@2x.png"
            />
          </div>
          <div className={styles.desc}>
            <div className={styles.account}>
              <div className={styles.profile}>
                <div className={styles.profileName}>
                  <div className={styles.shirleyromero}>shirleyromero</div>
                </div>
                <div className={styles.button}>
                  <div className={styles.button1}>
                    <div className={styles.editProfile}>Edit Profile</div>
                  </div>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.icon1}>
                  <img
                    className={styles.iconsoptions}
                    alt=""
                    src="/iconsoptions.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tag}>
              <div className={styles.profileName}>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.editProfile}>{`0 `}</div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> posts</div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.editProfile}>{`255 `}</div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> followers</div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.editProfile}>{`500 `}</div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> following</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profileName1}>
              <div className={styles.shirleyRomero}>Shirley Romero</div>
            </div>
          </div>
        </div>
        <div className={styles.toogle}>
          <div className={styles.border}>
            <div className={styles.border1} />
          </div>
          <div className={styles.toogle1}>
            <div className={styles.button5}>
              <div className={styles.border2}>
                <div className={styles.border3} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon3.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>POSTS</div>
                </div>
              </div>
            </div>
            <div className={styles.button7}>
              <div className={styles.border4}>
                <div className={styles.border3} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon4.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>Saved</div>
                </div>
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.border4}>
                <div className={styles.border7} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon5.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>tagged</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.content1}>
            <div className={styles.content2}>
              <div className={styles.button11}>
                <div className={styles.button12}>
                  <div className={styles.banned}>
                    <img
                      className={styles.googleplayBannedIcon}
                      alt=""
                      src="/googleplaybanned@2x.png"
                    />
                  </div>
                  <div className={styles.banned}>
                    <img
                      className={styles.appstoreBannedIcon}
                      alt=""
                      src="/appstorebanned@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div3}>
                <div className={styles.div4}>
                  <div className={styles.startCapturingAnd}>
                    Start capturing and sharing your moments.
                  </div>
                </div>
              </div>
              <div className={styles.div5}>
                <div className={styles.div6}>
                  <div className={styles.posts}>
                    Get the app to share your first photo or video.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.footer2}>
            <div className={styles.footerTop}>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Meta</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>About</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Blog</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>jobs</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>Help</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>API</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>privacy</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>terms</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>top accounts</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>hashtags</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>locations</div>
              </div>
              <div className={styles.footerItem}>
                <div className={styles.meta}>ınstagram lite</div>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerItem}>
                <div className={styles.profileName}>
                  <div className={styles.meta}>English</div>
                </div>
                <div className={styles.icon5}>
                  <img
                    className={styles.iconsarrow}
                    alt=""
                    src="/iconsarrow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.footerItem13}>
                <div className={styles.meta}>© 2021 Instagram from Meta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navigations}>
        <div className={styles.navigations1}>
          <div className={styles.navigations2}>
            <div className={styles.logo}>
              <img
                className={styles.logoIcon}
                alt=""
                src="/logo@2x.png"
                onClick={onLogoImageClick}
              />
            </div>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <div className={styles.search1}>
                  <div className={styles.icon6}>
                    <img
                      className={styles.iconssearch}
                      alt=""
                      src="/iconssearch.svg"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.search2}>Search</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuButton}>
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem.svg"
                onClick={onMenuButtonItemIconClick}
              />
              <div className={styles.menuButtonItem}>
                <img
                  className={styles.iconsmessenger}
                  alt=""
                  src="/iconsmessenger.svg"
                  onClick={onIconsMessengerClick}
                />
              </div>
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/menubuttonitem2.svg"
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem3.svg"
                onClick={onMenuButtonItemIcon2Click}
              />
              <img
                className={styles.menuButtonItem}
                alt=""
                src="/menubuttonitem4.svg"
              />
              <img
                className={styles.menuButtonItemIcon4}
                alt=""
                src="/menubuttonitem5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border8} />
    </div>
  );
};

export default MyProfile;
