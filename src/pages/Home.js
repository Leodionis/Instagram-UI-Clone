import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onUserNameContainerClick = useCallback(() => {
    navigate("/userprofile");
  }, [navigate]);

  const onMenuButtonItemIcon1Click = useCallback(() => {
    navigate("/messenger");
  }, [navigate]);

  const onMenuButtonItemIcon3Click = useCallback(() => {
    navigate("/explore");
  }, [navigate]);

  const onMenuButtonItemIcon5Click = useCallback(() => {
    navigate("/myprofile");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.secondary}>
          <div className={styles.profile}>
            <div className={styles.profile1}>
              <div className={styles.profilePic}>
                <img
                  className={styles.profilePicSIcon}
                  alt=""
                  src="/profilepics@2x.png"
                />
              </div>
              <div className={styles.profileName}>
                <div className={styles.userName}>
                  <div className={styles.shirleyromero}>shirleyromero</div>
                </div>
                <div className={styles.accountName}>
                  <div className={styles.shirleyRomero}>Shirley romero</div>
                </div>
              </div>
              <div className={styles.profileBtn}>
                <div className={styles.switch}>Switch</div>
              </div>
            </div>
          </div>
          <div className={styles.suggestions}>
            <div className={styles.suggestionsTitle}>
              <div className={styles.suggestionsForYou}>
                Suggestions For You
              </div>
            </div>
            <div className={styles.suggestionsBtn}>
              <div className={styles.seeAll}>See All</div>
            </div>
          </div>
          <div className={styles.follows}>
            <div className={styles.follow}>
              <div className={styles.profilePicParent}>
                <div className={styles.profilePic}>
                  <img
                    className={styles.profilePicSIcon1}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profileName1}>
                  <div className={styles.profileName2}>
                    <div className={styles.terylucas}>terylucas</div>
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.followedByTerylucas}>
                      Followed by terylucas + 2 more
                    </div>
                  </div>
                </div>
                <div className={styles.followBtn}>
                  <div className={styles.follow1}>follow</div>
                </div>
              </div>
            </div>
            <div className={styles.follow}>
              <div className={styles.profilePicParent}>
                <div className={styles.profilePic}>
                  <img
                    className={styles.profilePicSIcon1}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profileName1}>
                  <div className={styles.profileName2}>
                    <div className={styles.terylucas}>lauramatthews</div>
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.followedByTerylucas}>
                      Followed by lauramatthews + 2 more
                    </div>
                  </div>
                </div>
                <div className={styles.followBtn}>
                  <div className={styles.follow1}>follow</div>
                </div>
              </div>
            </div>
            <div className={styles.follow}>
              <div className={styles.profilePicParent}>
                <div className={styles.profilePic}>
                  <img
                    className={styles.profilePicSIcon1}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profileName1}>
                  <div className={styles.profileName2}>
                    <div className={styles.terylucas}>harryprescott</div>
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.followedByTerylucas}>
                      Followed by harryprescott + 2 more
                    </div>
                  </div>
                </div>
                <div className={styles.followBtn}>
                  <div className={styles.follow1}>follow</div>
                </div>
              </div>
            </div>
            <div className={styles.follow}>
              <div className={styles.profilePicParent}>
                <div className={styles.profilePic}>
                  <img
                    className={styles.profilePicSIcon1}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profileName1}>
                  <div className={styles.profileName2}>
                    <div className={styles.terylucas}>ednamanz</div>
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.followedByTerylucas}>
                      Followed by ednamanz + 2 more
                    </div>
                  </div>
                </div>
                <div className={styles.followBtn}>
                  <div className={styles.follow1}>follow</div>
                </div>
              </div>
            </div>
            <div className={styles.follow}>
              <div className={styles.profilePicParent}>
                <div className={styles.profilePic}>
                  <img
                    className={styles.profilePicSIcon1}
                    alt=""
                    src="/profilepics@2x.png"
                  />
                </div>
                <div className={styles.profileName1}>
                  <div className={styles.profileName2}>
                    <div className={styles.terylucas}>christinasterling</div>
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.followedByTerylucas}>
                      Followed by christinasterling + 2 m...
                    </div>
                  </div>
                </div>
                <div className={styles.followBtn}>
                  <div className={styles.follow1}>follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer1}>
              <div className={styles.footer2}>
                <div className={styles.footerItem}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>About</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem1}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Press</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem2}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>API</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem3}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Jobs</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem4}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Privacy</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem5}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Terms</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem6}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Locations</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem7}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Top Accounts</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem8}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Hashtags</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
                <div className={styles.footerItem9}>
                  <div className={styles.suggestionsTitle}>
                    <div className={styles.about}>Language</div>
                  </div>
                  <div className={styles.b7}>
                    <div className={styles.about}>·</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.copyright}>
              <div className={styles.instagramFromMeta}>
                © 2021 Instagram from Meta
              </div>
            </div>
          </div>
        </div>
        <div className={styles.primary}>
          <div className={styles.storySection}>
            <div className={styles.story}>
              <div className={styles.story1}>
                <div className={styles.story2}>
                  <div className={styles.storyItems}>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/profilepics@2x.png"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>Your Story</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic1.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}> TerryLucas</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic2.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>LauraMatt...</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic3.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>harryprescott</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic4.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>ednamanz</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic5.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>christinaste...</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic6.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>johnschmit</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic7.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>amyporte...</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                    <div className={styles.storyItem}>
                      <div className={styles.avatarProfilePic}>
                        <img
                          className={styles.avatarProfilePicIcon}
                          alt=""
                          src="/avatarprofilepic8.svg"
                        />
                      </div>
                      <div className={styles.avatarName}>
                        <div className={styles.yourStory}>joeburton</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.storyButton}>
                    <div className={styles.buttonArrow}>
                      <img
                        className={styles.iconsarrow}
                        alt=""
                        src="/iconsarrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.header}>
              <div className={styles.headerWrapper}>
                <div className={styles.header1}>
                  <img
                    className={styles.avatarCircleIcon}
                    alt=""
                    src="/avatarcircle.svg"
                  />
                  <div
                    className={styles.userName1}
                    onClick={onUserNameContainerClick}
                  >
                    <div className={styles.userName2}>
                      <div className={styles.shirleyromero}>terrylucas</div>
                    </div>
                  </div>
                  <div className={styles.moreOptions}>
                    <div className={styles.icon}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsmore.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.postImg}>
              <div className={styles.div} />
              <img className={styles.icon1} alt="" src="/1@2x.png" />
            </div>
            <div className={styles.footer3}>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
              <div className={styles.icons}>
                <div className={styles.iconLeft}>
                  <div className={styles.con}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconslke.svg"
                    />
                  </div>
                  <div className={styles.con1}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconscomment.svg"
                    />
                  </div>
                  <div className={styles.con2}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconsshareposts.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconRight}>
                  <div className={styles.con3}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconssave.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.likes}>
                <div className={styles.shirleyromero}>1.069</div>
                <div className={styles.likes1}> Likes</div>
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>
                  <div className={styles.hourAgo}>1 hour ago</div>
                </div>
              </div>
              <div className={styles.addcomment}>
                <div className={styles.border2}>
                  <div className={styles.border3} />
                </div>
                <div className={styles.addcomment1}>
                  <div className={styles.iconParent}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsemoji.svg"
                      />
                    </div>
                    <div className={styles.add}>
                      <div className={styles.addAComment}>Add a comment...</div>
                    </div>
                    <div className={styles.postBtn}>
                      <div className={styles.suggestionsForYou}>post</div>
                    </div>
                  </div>
                </div>
                <div className={styles.border4}>
                  <div className={styles.border3} />
                </div>
              </div>
              <div className={styles.border6}>
                <div className={styles.border1} />
              </div>
              <div className={styles.comment}>
                <div className={styles.userComment}>
                  <div className={styles.frameParent}>
                    <div className={styles.userNameParent}>
                      <div className={styles.suggestionsTitle}>
                        <div
                          className={styles.terrylucas1}
                        >{`terrylucas `}</div>
                      </div>
                      <div className={styles.userComment1}>
                        <div className={styles.imperdietInSit}>
                          Imperdiet in sit rhoncus, eleifend tellus augue lectus
                          potenti pellentesque
                        </div>
                      </div>
                    </div>
                    <div className={styles.moreBtn}>
                      <div className={styles.imperdietInSit}>
                        <span>...</span>
                        <span className={styles.more1}>more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.addAComment}>
                    View all 100 comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post2}>
            <div className={styles.header}>
              <div className={styles.headerWrapper}>
                <div className={styles.header1}>
                  <img
                    className={styles.avatarCircleIcon}
                    alt=""
                    src="/avatarcircle1.svg"
                  />
                  <div className={styles.userName4}>
                    <div className={styles.userName2}>
                      <div className={styles.shirleyromero}>lauramatthews</div>
                    </div>
                  </div>
                  <div className={styles.moreOptions}>
                    <div className={styles.icon}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsmore.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.postImg}>
              <div className={styles.div} />
              <img className={styles.icon1} alt="" src="/1@2x.png" />
            </div>
            <div className={styles.footer3}>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
              <div className={styles.icons}>
                <div className={styles.iconLeft}>
                  <div className={styles.con}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconslke.svg"
                    />
                  </div>
                  <div className={styles.con1}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconscomment.svg"
                    />
                  </div>
                  <div className={styles.con2}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconsshareposts.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconRight}>
                  <div className={styles.con3}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconssave.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.likes}>
                <div className={styles.shirleyromero}>1.069</div>
                <div className={styles.likes1}> Likes</div>
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>
                  <div className={styles.hourAgo}>1 hour ago</div>
                </div>
              </div>
              <div className={styles.addcomment}>
                <div className={styles.border2}>
                  <div className={styles.border3} />
                </div>
                <div className={styles.addcomment1}>
                  <div className={styles.iconParent}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsemoji.svg"
                      />
                    </div>
                    <div className={styles.add}>
                      <div className={styles.addAComment}>Add a comment...</div>
                    </div>
                    <div className={styles.postBtn}>
                      <div className={styles.suggestionsForYou}>post</div>
                    </div>
                  </div>
                </div>
                <div className={styles.border4}>
                  <div className={styles.border3} />
                </div>
              </div>
              <div className={styles.border6}>
                <div className={styles.border1} />
              </div>
              <div className={styles.comment}>
                <div className={styles.userComment}>
                  <div className={styles.frameParent}>
                    <div className={styles.userNameParent}>
                      <div className={styles.suggestionsTitle}>
                        <div className={styles.terrylucas1}>lauramatthews</div>
                      </div>
                      <div className={styles.userComment1}>
                        <div className={styles.imperdietInSit}>
                          Imperdiet in sit rhoncus, eleifend tellus augue lectus
                          potenti pellentesque
                        </div>
                      </div>
                    </div>
                    <div className={styles.moreBtn}>
                      <div className={styles.imperdietInSit}>
                        <span>...</span>
                        <span className={styles.more1}>more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.addAComment}>
                    View all 100 comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post4}>
            <div className={styles.header}>
              <div className={styles.headerWrapper}>
                <div className={styles.header1}>
                  <img
                    className={styles.avatarCircleIcon}
                    alt=""
                    src="/avatarcircle2.svg"
                  />
                  <div className={styles.userName4}>
                    <div className={styles.userName2}>
                      <div className={styles.shirleyromero}>harryprescott</div>
                    </div>
                  </div>
                  <div className={styles.moreOptions}>
                    <div className={styles.icon}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsmore.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.postImg}>
              <div className={styles.div} />
              <img className={styles.icon1} alt="" src="/1@2x.png" />
            </div>
            <div className={styles.footer3}>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
              <div className={styles.icons}>
                <div className={styles.iconLeft}>
                  <div className={styles.con}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconslke.svg"
                    />
                  </div>
                  <div className={styles.con1}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconscomment.svg"
                    />
                  </div>
                  <div className={styles.con2}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconsshareposts.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconRight}>
                  <div className={styles.con3}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconssave.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.likes}>
                <div className={styles.shirleyromero}>1.069</div>
                <div className={styles.likes1}> Likes</div>
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>
                  <div className={styles.hourAgo}>1 hour ago</div>
                </div>
              </div>
              <div className={styles.addcomment}>
                <div className={styles.border2}>
                  <div className={styles.border3} />
                </div>
                <div className={styles.addcomment1}>
                  <div className={styles.iconParent}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsemoji.svg"
                      />
                    </div>
                    <div className={styles.add}>
                      <div className={styles.addAComment}>Add a comment...</div>
                    </div>
                    <div className={styles.postBtn}>
                      <div className={styles.suggestionsForYou}>post</div>
                    </div>
                  </div>
                </div>
                <div className={styles.border4}>
                  <div className={styles.border3} />
                </div>
              </div>
              <div className={styles.border6}>
                <div className={styles.border1} />
              </div>
              <div className={styles.comment}>
                <div className={styles.userComment}>
                  <div className={styles.frameParent}>
                    <div className={styles.userNameParent}>
                      <div className={styles.suggestionsTitle}>
                        <div className={styles.terrylucas1}>harryprescott</div>
                      </div>
                      <div className={styles.userComment1}>
                        <div className={styles.imperdietInSit}>
                          Imperdiet in sit rhoncus, eleifend tellus augue lectus
                          potenti pellentesque
                        </div>
                      </div>
                    </div>
                    <div className={styles.moreBtn}>
                      <div className={styles.imperdietInSit}>
                        <span>...</span>
                        <span className={styles.more1}>more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.addAComment}>
                    View all 100 comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post6}>
            <div className={styles.header}>
              <div className={styles.headerWrapper}>
                <div className={styles.header1}>
                  <img
                    className={styles.avatarCircleIcon}
                    alt=""
                    src="/avatarcircle3.svg"
                  />
                  <div className={styles.userName4}>
                    <div className={styles.userName2}>
                      <div className={styles.shirleyromero}>ednamanz</div>
                    </div>
                  </div>
                  <div className={styles.moreOptions}>
                    <div className={styles.icon}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsmore.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.postImg}>
              <div className={styles.div} />
              <img className={styles.icon1} alt="" src="/1@2x.png" />
            </div>
            <div className={styles.footer3}>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
              <div className={styles.icons}>
                <div className={styles.iconLeft}>
                  <div className={styles.con}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconslke.svg"
                    />
                  </div>
                  <div className={styles.con1}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconscomment.svg"
                    />
                  </div>
                  <div className={styles.con2}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconsshareposts.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconRight}>
                  <div className={styles.con3}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconssave.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.likes}>
                <div className={styles.shirleyromero}>10.699</div>
                <div className={styles.likes1}> Likes</div>
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>
                  <div className={styles.hourAgo}>3 hour ago</div>
                </div>
              </div>
              <div className={styles.addcomment}>
                <div className={styles.border2}>
                  <div className={styles.border3} />
                </div>
                <div className={styles.addcomment1}>
                  <div className={styles.iconParent}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsemoji.svg"
                      />
                    </div>
                    <div className={styles.add}>
                      <div className={styles.addAComment}>Add a comment...</div>
                    </div>
                    <div className={styles.postBtn}>
                      <div className={styles.suggestionsForYou}>post</div>
                    </div>
                  </div>
                </div>
                <div className={styles.border4}>
                  <div className={styles.border3} />
                </div>
              </div>
              <div className={styles.border6}>
                <div className={styles.border1} />
              </div>
              <div className={styles.comment}>
                <div className={styles.userComment}>
                  <div className={styles.frameParent}>
                    <div className={styles.userNameParent}>
                      <div className={styles.suggestionsTitle}>
                        <div className={styles.terrylucas1}>ednamanz</div>
                      </div>
                      <div className={styles.userComment1}>
                        <div className={styles.imperdietInSit}>
                          Imperdiet in sit rhoncus, eleifend tellus augue lectus
                          potenti pellentesque
                        </div>
                      </div>
                    </div>
                    <div className={styles.moreBtn}>
                      <div className={styles.imperdietInSit}>
                        <span>...</span>
                        <span className={styles.more1}>more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.addAComment}>
                    View all 120 comments
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.post8}>
            <div className={styles.header}>
              <div className={styles.headerWrapper}>
                <div className={styles.header1}>
                  <img
                    className={styles.avatarCircleIcon}
                    alt=""
                    src="/avatarcircle4.svg"
                  />
                  <div className={styles.userName4}>
                    <div className={styles.userName2}>
                      <div className={styles.shirleyromero}>
                        christinasterling
                      </div>
                    </div>
                  </div>
                  <div className={styles.moreOptions}>
                    <div className={styles.icon}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsmore.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.postImg}>
              <div className={styles.div} />
              <img className={styles.icon1} alt="" src="/1@2x.png" />
            </div>
            <div className={styles.footer3}>
              <div className={styles.border}>
                <div className={styles.border1} />
              </div>
              <div className={styles.icons}>
                <div className={styles.iconLeft}>
                  <div className={styles.con}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconslke.svg"
                    />
                  </div>
                  <div className={styles.con1}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconscomment.svg"
                    />
                  </div>
                  <div className={styles.con2}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconsshareposts.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconRight}>
                  <div className={styles.con3}>
                    <img
                      className={styles.iconsmore}
                      alt=""
                      src="/iconssave.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.likes}>
                <div className={styles.shirleyromero}>10.699</div>
                <div className={styles.likes1}> Likes</div>
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>
                  <div className={styles.hourAgo}>3 hour ago</div>
                </div>
              </div>
              <div className={styles.addcomment}>
                <div className={styles.border2}>
                  <div className={styles.border3} />
                </div>
                <div className={styles.addcomment1}>
                  <div className={styles.iconParent}>
                    <div className={styles.icon2}>
                      <img
                        className={styles.iconsmore}
                        alt=""
                        src="/iconsemoji.svg"
                      />
                    </div>
                    <div className={styles.add}>
                      <div className={styles.addAComment}>Add a comment...</div>
                    </div>
                    <div className={styles.postBtn}>
                      <div className={styles.suggestionsForYou}>post</div>
                    </div>
                  </div>
                </div>
                <div className={styles.border4}>
                  <div className={styles.border3} />
                </div>
              </div>
              <div className={styles.border6}>
                <div className={styles.border1} />
              </div>
              <div className={styles.comment}>
                <div className={styles.userComment}>
                  <div className={styles.frameParent}>
                    <div className={styles.userNameParent}>
                      <div className={styles.suggestionsTitle}>
                        <div className={styles.terrylucas1}>
                          christinasterling
                        </div>
                      </div>
                      <div className={styles.userComment1}>
                        <div className={styles.imperdietInSit}>
                          Imperdiet in sit rhoncus, eleifend tellus augue lectus
                          potenti pellentesque
                        </div>
                      </div>
                    </div>
                    <div className={styles.moreBtn}>
                      <div className={styles.imperdietInSit}>
                        <span>...</span>
                        <span className={styles.more1}>more</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.commentHeader}>
                  <div className={styles.addAComment}>
                    View all 555 comments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigations}>
          <div className={styles.navigations1}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <div className={styles.search1}>
                  <div className={styles.icon15}>
                    <img
                      className={styles.iconssearch}
                      alt=""
                      src="/iconssearch.svg"
                    />
                  </div>
                  <div className={styles.suggestionsTitle}>
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
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem1.svg"
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem2.svg"
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem3.svg"
              />
              <img
                className={styles.menuButtonItemIcon}
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
      <div className={styles.border40} />
      <div className={styles.navigations2}>
        <div className={styles.navigations3}>
          <div className={styles.navigations1}>
            <div className={styles.logo}>
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <div className={styles.search1}>
                  <div className={styles.icon15}>
                    <img
                      className={styles.iconssearch}
                      alt=""
                      src="/iconssearch.svg"
                    />
                  </div>
                  <div className={styles.suggestionsTitle}>
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
              />
              <img
                className={styles.menuButtonItemIcon7}
                alt=""
                src="/menubuttonitem1.svg"
                onClick={onMenuButtonItemIcon1Click}
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem2.svg"
              />
              <img
                className={styles.menuButtonItemIcon7}
                alt=""
                src="/menubuttonitem3.svg"
                onClick={onMenuButtonItemIcon3Click}
              />
              <img
                className={styles.menuButtonItemIcon}
                alt=""
                src="/menubuttonitem4.svg"
              />
              <img
                className={styles.menuButtonItemIcon11}
                alt=""
                src="/menubuttonitem5@2x.png"
                onClick={onMenuButtonItemIcon5Click}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
