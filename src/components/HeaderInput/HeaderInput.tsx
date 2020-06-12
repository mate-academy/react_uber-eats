import React from "react";
import "./HeaderInput.scss";
import cn from "classnames";

interface Props {
  imgUrl?: string;
  value: string;
  placeholder: string;
  alt?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  className?: string;
}

export const HeaderInput: React.FC<Props> = ({
  imgUrl,
  value,
  placeholder,
  alt,
  onChange,
  name,
  type,
  className,
}) => {
  const moreClass = className ? className : '';

  return (
    <div
      className={cn(
        `${moreClass}`,
        {
        HeaderInput: true,
      }
      )}
    >
      {imgUrl && <img src={imgUrl} alt={alt} className="HeaderInput__Img" />}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={e => onChange(e)}
        className="HeaderInput__Inp"
      />
    </div>
  );
};
