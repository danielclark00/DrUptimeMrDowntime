package com.dumd.server.monitor.service.dependency;

import com.dumd.server.monitor.service.activity.*;
import com.dumd.server.monitor.service.event.CheckAppStatusEvent;
import dagger.Component;

import javax.inject.Singleton;

@Singleton
@Component(modules = {DaoModule.class})
public interface ServiceComponent {
    CreateAccountActivity provideCreateAccountActivity();
    LoginUserActivity provideLoginUserActivity();
    AddNewAppActivity provideAddNewAppActivity();
    DeleteAppActivity provideDeleteAppActivity();
    GetUserAppsActivity provideGetUserAppsActivity();
    GetAppDetailsActivity provideGetAppDetailsActivity();
    CheckAppStatusEvent provideCheckAppStatusEvent();
}
