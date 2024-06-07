import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Messenger.module.css";

const Messenger = () => {
  const navigate = useNavigate();

  const onProfilePicContainerClick = useCallback(() => {
    navigate("/userprofile");
  }, [navigate]);

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuButtonItemIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuButtonItemIcon3Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  return (
    <div className={styles.messenger}>
      <div className={styles.messengerbody}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.header}>
              <div className={styles.header1}>
                <div className={styles.header2}>
                  <div className={styles.headerText}>
                    <div className={styles.profileNameParent}>
                      <div className={styles.profileName}>
                        <div className={styles.shirleyromero}>
                          shirleyromero
                        </div>
                      </div>
                      <div className={styles.icon}>
                        <img
                          className={styles.iconsarrow}
                          alt=""
                          src="/iconsarrow@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.icon1}>
                    <img
                      className={styles.iconsnewmessages}
                      alt=""
                      src="/iconsnewmessages.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
            </div>
            <div className={styles.messenger1}>
              <div className={styles.messageProfile}>
                <div
                  className={styles.profilePic}
                  onClick={onProfilePicContainerClick}
                >
                  <img
                    className={styles.profilePicSIcon}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profile}>
                  <div className={styles.profileName1}>
                    <div className={styles.trerrylucas}>trerrylucas</div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.active1hAgo}>
                      Imperdiet in sit rhoncus, eleifend tellu...
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.messageProfile}>
                <div className={styles.profilePic1}>
                  <img
                    className={styles.profilePicSIcon}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profile}>
                  <div className={styles.profileName1}>
                    <div className={styles.trerrylucas}>lauramatthews</div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.active1hAgo}>Active 1h ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.messageProfile}>
                <div className={styles.profilePic1}>
                  <img
                    className={styles.profilePicSIcon}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profile}>
                  <div className={styles.profileName1}>
                    <div className={styles.trerrylucas}>harryprescott</div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.active1hAgo}>
                      Augue lectus potenti pellentesque.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.messageProfile}>
                <div className={styles.profilePic1}>
                  <img
                    className={styles.profilePicSIcon}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profile}>
                  <div className={styles.profileName1}>
                    <div className={styles.trerrylucas}>ednamanz</div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.active1hAgo}>Active 1h ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.messageProfile}>
                <div className={styles.profilePic1}>
                  <img
                    className={styles.profilePicSIcon}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profile}>
                  <div className={styles.profileName1}>
                    <div className={styles.trerrylucas}>christinasterling</div>
                  </div>
                  <div className={styles.time}>
                    <div className={styles.active1hAgo}>
                      Imperdiet in sit rhoncus, eleifend tellu...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content1}>
              <div className={styles.content2}>
                <img className={styles.icon2} alt="" src="/icon.svg" />
                <div className={styles.header3}>
                  <div className={styles.header4}>
                    <div className={styles.yourMessages}>Your Messages</div>
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles.text1}>
                    <div className={styles.active1hAgo}>
                      Send private photos and messages to a friend or group.
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.button1}>
                    <div className={styles.sendMessageWrapper}>
                      <div className={styles.sendMessage}>Send Message</div>
                    </div>
                  </div>
                </div>
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
                  <div className={styles.icon3}>
                    <img
                      className={styles.iconssearch}
                      alt=""
                      src="/iconssearch.svg"
                    />
                  </div>
                  <div className={styles.profileName1}>
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
              <img
                className={styles.menuButtonItemIcon1}
                alt=""
                src="/menubuttonitem1.svg"
              />
              <img
                className={styles.menuButtonItemIcon1}
                alt=""
                src="/menubuttonitem2.svg"
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem3.svg"
                onClick={onMenuButtonItemIcon3Click}
              />
              <img
                className={styles.menuButtonItemIcon1}
                alt=""
                src="/menubuttonitem4.svg"
              />
              <img
                className={styles.menuButtonItemIcon5}
                alt=""
                src="/menubuttonitem5@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border2} />
    </div>
  );
};

export default Messenger;
