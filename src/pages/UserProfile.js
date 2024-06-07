import styles from "./UserProfile.module.css";

const UserProfile = () => {
  
  return (
    <div className={styles.userProfile}>
      <div className={styles.userProfilebody}>
        <div className={styles.header}>
          <div className={styles.profilePic}>
            <img
              className={styles.profilePicIcon}
              alt=""
              src="/profilepic@2x.png"
            />
          </div>
          <div className={styles.desc}>
            <div className={styles.account}>
              <div className={styles.profile}>
                <div className={styles.profileName}>
                  <div className={styles.terrylucas}>terrylucas</div>
                </div>
                <div className={styles.button}>
                  <div className={styles.button1}>
                    <div className={styles.follow}>Follow</div>
                  </div>
                </div>
              </div>
              <div className={styles.icon}>
                <div className={styles.icon1}>
                  <img
                    className={styles.iconsmore}
                    alt=""
                    src="/iconsmore.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tag}>
              <div className={styles.profileName}>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.follow}>6 </div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> posts</div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.follow}>{`4M `}</div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> followers</div>
                  </div>
                </div>
                <div className={styles.button2}>
                  <div className={styles.buttonSize}>
                    <div className={styles.follow}>{`1.250 `}</div>
                  </div>
                  <div className={styles.profileName}>
                    <div className={styles.posts}> following</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profileName1}>
              <div className={styles.terryLucas}>Terry Lucas</div>
            </div>
          </div>
        </div>
        <div className={styles.storys}>
          <div className={styles.story}>
            <img
              className={styles.avatarProfilePicIcon}
              alt=""
              src="/avatarprofilepic9.svg"
            />
            <div className={styles.avatarName}>
              <div className={styles.madeUsWrapper}>
                <div className={styles.madeUs}>Made Us</div>
              </div>
            </div>
          </div>
          <div className={styles.story}>
            <img
              className={styles.avatarProfilePicIcon}
              alt=""
              src="/avatarprofilepic10.svg"
            />
            <div className={styles.avatarName}>
              <div className={styles.madeUsWrapper}>
                <div className={styles.madeUs1}>Lorem...</div>
              </div>
            </div>
          </div>
          <div className={styles.story}>
            <img
              className={styles.avatarProfilePicIcon}
              alt=""
              src="/avatarprofilepic11.svg"
            />
            <div className={styles.avatarName}>
              <div className={styles.madeUsWrapper}>
                <div className={styles.madeUs1}>Lorem...</div>
              </div>
            </div>
          </div>
          <div className={styles.story}>
            <img
              className={styles.avatarProfilePicIcon}
              alt=""
              src="/avatarprofilepic12.svg"
            />
            <div className={styles.avatarName}>
              <div className={styles.madeUsWrapper}>
                <div className={styles.madeUs1}>Lorem...</div>
              </div>
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
            <div className={styles.buttonSize}>
              <div className={styles.border4}>
                <div className={styles.border3} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon6.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>guıdes</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonSize}>
              <div className={styles.border4}>
                <div className={styles.border7} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon7.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>reels</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonSize}>
              <div className={styles.border4}>
                <div className={styles.border7} />
              </div>
              <div className={styles.button6}>
                <div className={styles.buttonIcon}>
                  <img className={styles.icon2} alt="" src="/icon8.svg" />
                </div>
                <div className={styles.buttonTitle}>
                  <div className={styles.posts3}>vıdeos</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonSize}>
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
        <div className={styles.userPosts}>
          <div className={styles.row}>
            <div className={styles.myPost}>
              <div className={styles.smallPost}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost1}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost2}>
                <div className={styles.icon11}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.myPost}>
              <div className={styles.smallPost3}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost4}>
                <div className={styles.icon11}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost5}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.myPost}>
              <div className={styles.smallPost6}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost7}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost8}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.myPost}>
              <div className={styles.smallPost}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost1}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost2}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row4}>
            <div className={styles.myPost}>
              <div className={styles.smallPost3}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost4}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost5}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon9.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row5}>
            <div className={styles.myPost}>
              <div className={styles.smallPost6}>
                <div className={styles.icon11}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost1}>
              <div className={styles.smallPost7}>
                <div className={styles.icon11}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.myPost2}>
              <div className={styles.smallPost8}>
                <div className={styles.icon7}>
                  <img className={styles.icon8} alt="" src="/icon1.svg" />
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
              <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            </div>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <div className={styles.search1}>
                  <div className={styles.icon44}>
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
      <div className={styles.border12} />
    </div>
  );
};

export default UserProfile;
