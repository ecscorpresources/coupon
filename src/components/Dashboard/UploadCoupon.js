import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdComputer } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import {
  GRID,
  HALFGRID,
  EQUALGRID,
  FOUREQUALGRID,
  Select,
  TextArea,
  TextInput,
} from "../FormControl";
import FadeIn from "react-fade-in";
import "../../css/uploadcuopon.scss";

const UploadCuopon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>upload</title>
        </Helmet>
        <section className="uploadSecondSection">
          <h5>Fill out your promo details </h5>
          <form>
            <EQUALGRID>
              <Select>
                <option value="Category">Cuopon Type</option>
              </Select>

              <Select>
                <option value="Sub Category">Category</option>
              </Select>
            </EQUALGRID>
            <section className="file">
              <h5>Upload Item Image</h5>
              <article>
                <div>
                  <input type="file" name="computer" id="computer" />
                  <label htmlFor="computer">
                    <MdComputer className="file-icon" /> From Computer
                  </label>
                </div>
                <div>
                  <input type="file" name="dropbox" id="dropbox" />
                  <label htmlFor="dropbox">
                    <FaDropbox className="file-icon" /> From Dropbox
                  </label>
                </div>
              </article>
            </section>
            <HALFGRID>
              <label htmlFor="cuoponcode">Coupon Code</label>
              <TextInput
                placeholder="Cuopon Code"
                id="couponcode"
                name="cuoponcode"
              />
            </HALFGRID>
            <h5>Coupon Title</h5>
            <FOUREQUALGRID>
              <Select>
                <option value="Up to">Up to</option>
              </Select>
              <Select>
                <option value="$18">$18</option>
              </Select>

              <Select>
                <option value="off">off</option>
              </Select>

              <TextInput placeholder="Write in your Coupon title" />
            </FOUREQUALGRID>

            <GRID>
              <TextArea placeholder="Describe your Cuopon" />
            </GRID>

            <HALFGRID>
              <label htmlFor="validlocation">Valid Location</label>
              <Select>
                <option value="Online">Online</option>
              </Select>
            </HALFGRID>

            <section>
              <EQUALGRID>
                <TextInput placeholder="Enter link here" />
                <TextInput placeholder="Enter link here" />
              </EQUALGRID>
              <EQUALGRID>
                <TextInput placeholder="Enter link here" />
                <TextInput placeholder="Enter link here" />
              </EQUALGRID>
              <GRID>
                <TextInput placeholder="Enter link here" />
              </GRID>
            </section>

            <HALFGRID>
              <label htmlFor="exclusion">Exclusion</label>
              <Select>
                <option value="No Exclusion">No Exclusion</option>
              </Select>
            </HALFGRID>

            <GRID>
              <label htmlFor="termsconditions">
                Enter Coupon Terms & Conditions
              </label>
              <TextArea placeholder="Enter T & C" />
            </GRID>
            <p>
              This small print is optional but highly recommended so that your
              customers know exactly what they are being offered.
            </p>

            <HALFGRID>
              <label htmlFor="date">Coupon Expiration Date</label>
              <input type="date" name="date" id="date" />
            </HALFGRID>

            <h5>Do you have your coupon design?</h5>
            <section className="file">
              <h5>Upload Cuopon design(Optional)</h5>
              <article>
                <div>
                  <input type="file" name="computer" id="computer" />
                  <label htmlFor="computer">
                    <MdComputer className="file-icon" /> From Computer
                  </label>
                </div>
                <div>
                  <input type="file" name="dropbox" id="dropbox" />
                  <label htmlFor="dropbox">
                    <FaDropbox className="file-icon" /> From Dropbox
                  </label>
                </div>
              </article>
            </section>
            <p>
              A 100 Cuopon already has provided a simple yet beautiful template
              to view the details on your coupon, however you can also upload
              you own cuopon pre-design for your customers to see. This is
              totally optional
            </p>
            <button type="submit">UPLOAD CUOPON</button>
          </form>
        </section>
      </FadeIn>
    </>
  );
};

export default UploadCuopon;
