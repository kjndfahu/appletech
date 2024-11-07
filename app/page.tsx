import {Promo} from "@/components/shared/promo";
import {Main} from "@/components/shared/main";
import {Popular} from "@/components/shared/popular";
import {SeoBlock} from "@/components/shared/seo-block";
import {BannerBlock} from "@/components/shared/banner-block";
import {NewItems} from "@/components/shared/new-items";
import {Priorities} from "@/components/shared/priorities";
import {SubscribeBlock} from "@/components/shared/sudscribe-block";
import {Categories} from "@/components/shared/categories";
import React from "react";

export default function Home() {
    return (
        <div className="bg-white">
            <Categories/>
            <Promo/>
            <Main/>
            <Popular/>
            <SeoBlock/>
            <BannerBlock/>
            <SeoBlock/>
            <NewItems/>
            <Priorities/>
            <SubscribeBlock/>
        </div>
    );
}
